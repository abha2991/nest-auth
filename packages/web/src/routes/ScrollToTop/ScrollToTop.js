import React from 'react'

import ScrollTop from 'react-scroll-to-top'

// export default function ScrollToTop() {
//   return (
//       <>
// <div>
//       <ScrollToTop smooth
//                    component={<p style={{ color: "blue" }}
//                    >UP</p>} />
//       <h1>Hello!</h1>
//       <h2>Scroll down for the button to appear</h2>
//       <p style={{ marginTop: "150vh" }}>bottom</p>
// </div>
//         </>
//   );
// }

const ScrollToTop = () => {
  return (
    <>
      <h1>Hello</h1>

      <ScrollTop smooth component={<h1>UP</h1>} />

      <h1>Hello!</h1>
      <h2>Scroll down for the button to appear</h2>
      <p style={{ marginTop: '400vh' }}>bottom</p>
    </>
  )
}

export default ScrollToTop
