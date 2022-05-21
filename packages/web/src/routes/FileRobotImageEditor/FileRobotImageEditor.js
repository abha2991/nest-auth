import React, { useState } from 'react';
import FilerobotImageEditor, { TABS, TOOLS } from 'react-filerobot-image-editor';
import one011 from "../img/one-011.png";
const FileRobotImageEditor=()=>{

  const [isImgEditorShown, setIsImgEditorShown] = useState(false);

  const openImgEditor = () => {
    setIsImgEditorShown(true);
  };

  const closeImgEditor = () => {
    setIsImgEditorShown(false);
  };


  return(
<>
      <button onClick={openImgEditor}>Open Filerobot image editor</button>
  {isImgEditorShown && (
      <FilerobotImageEditor
          source={one011}
          onSave={(editedImageObject, designState) => console.log('saved', editedImageObject, designState)}
          onClose={closeImgEditor}
          annotationsCommon={{
            fill: '#ff0000'
          }}
          Text={{ text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            fontFamily: 'Arial',
            fonts: [
              { label: 'Arial', value: 'Arial' },
              'Tahoma',
              'Sans-serif',
              { label: 'Comic Sans', value: 'Comic-sans' },
            ],
            fontSize: 32,
            letterSpacing: 0,
            lineHeight: 1,
            align: 'left',
            fontStyle: 'normal',
            onFontChange: (newFontFamily, reRenderCanvasFn) => undefined, }}
          Crop={{
            presetsItems: [
              {
                titleKey: 'classicTv',
                descriptionKey: '4:3',
                ratio: 4 / 3,
                // icon: CropClassicTv, // optional, CropClassicTv is a React Function component. Possible (React Function component, string or HTML Element)
              },
              {
                titleKey: 'cinemascope',
                descriptionKey: '21:9',
                ratio: 21 / 9,
                // icon: CropCinemaScope, // optional, CropCinemaScope is a React Function component.  Possible (React Function component, string or HTML Element)
              },
            ],
            presetsFolders: [
              {
                titleKey: 'socialMedia', // will be translated into Social Media as backend contains this translation key
                // icon: Social, // optional, Social is a React Function component. Possible (React Function component, string or HTML Element)
                groups: [
                  {
                    titleKey: 'facebook',
                    items: [
                      {
                        titleKey: 'profile',
                        width: 180,
                        height: 180,
                        descriptionKey: 'fbProfileSize',
                      },
                      {
                        titleKey: 'coverPhoto',
                        width: 820,
                        height: 312,
                        descriptionKey: 'fbCoverPhotoSize',
                      },
                    ],
                  },
                ],
              },
            ],
          }}
          tabsIds={[TABS.ADJUST, TABS.ANNOTATE, TABS.WATERMARK]} // or {['Adjust', 'Annotate', 'Watermark']}
          defaultTabId={TABS.ANNOTATE} // or 'Annotate'
          defaultToolId={TOOLS.TEXT} // or 'Text'
      />
  )}

    </>
  )


}



export default FileRobotImageEditor
