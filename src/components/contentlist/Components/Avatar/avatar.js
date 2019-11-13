import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import FolderIcon from '@material-ui/icons/Folder';
import DeleteOutlinedIcon from '@material-ui/icons/DeleteOutlined'
import MailIcon from '@material-ui/icons/Mail';
import MyTemplete  from '../../../templete';
import CodeBlock from '../../../';
import ReactMarkdown from 'react-markdown';


class MyAvatar extends React.Component
{
  renderAvatar()
  {
    return(
      <div className='avatar-list'>
          <span className = "row1"> <h1><b>External Images</b></h1></span>
          <div className = "avatar-display">
            <Avatar
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwH6DalS_KpcvdezZT-tymCO2Spog0pW1g8ySWMhAPAohnxKNJ"
            />
            <Avatar
            src="https://image.flaticon.com/icons/png/512/146/146018.png"
            />
            <Avatar
            src="https://midreshetrachel.com/wp-content/uploads/2014/10/flat-faces-icons-circle-16.png"
            />
          </div>


           <h1 className = "row"><b>Svg Icons</b></h1>
            <div className = "avatar-display">
                <Avatar style={{backgroundColor: '#8abc89'}}>
                  <FolderIcon/>
                </Avatar>  
                <Avatar style={{backgroundColor: '#4caf50'}}>
                  <DeleteOutlinedIcon/>
                </Avatar>
                <Avatar style={{backgroundColor: '#F01F6C'}}>
                  <MailIcon/>
                </Avatar>
            </div>


          <h1 className = "row"><b>Letters</b></h1>
          <div className = "avatar-display">
              <Avatar 
              src="https://cdn0.iconfinder.com/data/icons/mobile-device/512/w-letter-uppercase-text-round-latin-keyboard-2-512.png" 
              /> 
              <Avatar 
              src="https://cdn.pixabay.com/photo/2012/04/24/12/46/letter-39873_960_720.png"
              />
              <Avatar 
              src="https://cdn4.iconfinder.com/data/icons/alphabet-3/500/ABC_alphabet_letter_font_graphic_language_text_L-512.png"
              />
          </div>

       </div>
    );
  }

  render()
  {
    let output = this.renderAvatar();
    let myName = "Avatar";
    let string = `

    import Avatar from '@material-ui/core/Avatar';

     <div>
       <Avatar
           src="your link"
       />
       <Avatar>
         <Your Icon>
       </Avatar>
       <Avatar>
         Your Text
       </Avatar>
     </div>`;

    let code = (<ReactMarkdown source={string} renderers={{ code: CodeBlock }}/>);
    return(
      <div>
      <MyTemplete content = {output} name = {myName} sampleUsage = {code}/>
      </div>
    );
  }

}

export default MyAvatar;
