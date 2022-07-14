import React, { useEffect, useState } from 'react'
import useQueryParams from '../../../hooks/useQueryParams'
import Loading from '../../../components/Loading'
import AdminHeader from '../Header/AdminHeader'

const UpdateCardDetails = () => {
  const id = useQueryParams()
  const { id: id2 } = id
  //console.log({id2})
  const [cardData, setCardData] = useState()

  const getCardsOfUser = async (e) => {
    const res = await fetch(`http://localhost:3001/api/cardetails/getById`, {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json'
      },

      body: JSON.stringify({
        id: id2
      })
    })

    const data = await res.json()
    console.log({ data })
    setCardData(data)
  }
  useEffect(() => {
    getCardsOfUser()
  }, [id2])

  let name, value
  const handleInputs = (e) => {
    e.preventDefault()
    name = e.target.name
    value = e.target.value
    setCardData({ ...cardData, [name]: value })
  }

  const updateCardDetails = async (name, sale, total, description, noOfPages) => {
    //console.log({sale,total})
    console.log({ name, sale, total, description })
    const res = await fetch(`http://localhost:3001/api/cardetails/${id2}`, {
      method: 'PATCH',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json'
      },

      body: JSON.stringify({
        cardName: name,
        cardSalePrice: sale,
        cardTotalPrice: total,
        description,
        noOfPages
      })
    })

    const data = await res.json()

    //console.log({data})

    if (data.message === 'Successfully Updated') {
      window.alert('Successfully Updated!!')
    } else {
      window.alert('Something Went Wrong!!')
    }
  }

  if (!cardData) {
    return (
      <>
        <Loading />
      </>
    )
  }

  return (
    <>
      <AdminHeader />
      <div className="content-header sty-one">
        <ol className="breadcrumb">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <i className="fa fa-angle-right"></i>/ Update Card Details
          </li>
        </ol>
      </div>
      <div className="content">
        <div className="card m-t-3">
          <div className="card-body">
            <div className="table-responsive">
              <div className="content-wrapper" style={{ minHeight: 'auto' }}>
                <div className="input-group mycasetable-form "></div>
                <table id="example1" className="table table-bordered table-striped dataTable no-footer">
                  <thead>
                    <tr>
                      <th>Card Id</th>
                      <th>Card Name</th>
                      <th>Card Selling Price</th>
                      <th>Card Actual Price</th>
                      <th>Description</th>
                      <th>No Of Pages</th>
                      <th>Action</th>
                      <th>Image</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>{cardData?.id}</td>
                      <td>
                        <input type="text" value={cardData?.cardName} name="cardName" onChange={handleInputs} />
                      </td>
                      <td>
                        <input
                          type="text"
                          value={cardData?.cardSalePrice}
                          name="cardSalePrice"
                          onChange={handleInputs}
                        />
                      </td>
                      <td>
                        <input
                          type="text"
                          value={cardData?.cardTotalPrice}
                          name="cardTotalPrice"
                          onChange={handleInputs}
                        />
                      </td>
                      <td>
                        <input type="text" value={cardData?.description} name="description" onChange={handleInputs} />
                      </td>
                      <td>
                        <input type="text" value={cardData?.noOfPages} name="noOfPages" onChange={handleInputs} />
                      </td>
                      <td>
                        <button
                          onClick={() =>
                            updateCardDetails(
                              cardData?.cardName,
                              cardData?.cardSalePrice,
                              cardData?.cardTotalPrice,
                              cardData?.description,
                              cardData?.noOfPages
                            )
                          }
                        >
                          Update
                        </button>
                      </td>
                      <td>
                        <img
                          style={{ maxWidth: '80px' }}
                          src={
                            'http://localhost:3001/assets/' + cardData?.cardCategory + '/' + cardData.cardTemplates[0]
                          }
                        />
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default UpdateCardDetails
