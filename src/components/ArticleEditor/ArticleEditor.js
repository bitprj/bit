import React, { useState } from 'react';
import { debounce } from "lodash";
import { connect } from 'react-redux';
import styled from 'styled-components';
import Editor from 'rich-markdown-editor';
import {CloudinaryContext} from 'cloudinary-react';
import { openUploadWidget } from "../../services/CloudinaryService";

const ArticleEditor = ({
	article_id,
	content
}) => {
	const [readOnly,onChangeEdit] = useState(true)
	
	var [values,setValue] = useState(content)

	const [dark_theme,Change_theme] = useState(false)

	const [images, setImages] = useState([])

	const [edit,changeEdit] = useState("Edit")

	const ChangeTheme = () => {
		if(dark_theme){
			Change_theme(false)
		}
		else{
			Change_theme(true)
		}
	}

	const Change_ReadOnly = () => {
		if(readOnly){
			onChangeEdit(false)
			changeEdit("ReadOnly")
		}
		else{
			changeEdit("Edit")
			onChangeEdit(true)
		}
	}

	const handleChange = debounce(value => {
	    setValue(value());
	    console.log(values);
	  }, 5000);

	const beginUpload = tag => {
	  const uploadOptions = {
	    cloudName: "rajshah",
	    tags: [tag,'anImage'],
	    uploadPreset: "upload"
	  };

	  openUploadWidget(uploadOptions, (error, photos) => {
	    if (!error) {
	      if(photos.event === 'success'){
	      	values+="![]("+photos.info.url+")"
	      	setValue(values)
	        setImages([...images, photos.info.url])
		      }
	    } else {
	      console.log(error);
	    }
	  })
	}

	return(
		<div style={{background:"white",width:'60%',marginLeft:'auto',marginRight:'auto'}}>
		<div>
          <br />
          <button type="button" onClick={Change_ReadOnly}>
          	{edit}
          </button>
          <button type="button" onClick={ChangeTheme}>
          	Change Theme
          </button>
          {readOnly?null:<button type="button" onClick={() => beginUpload('image')}>
          	Upload Image</button>
          }
        </div>
        <br />
        <br />
			<Editor
			id="new_article"
			readOnly={readOnly}
			value={values}
			defaultValue={content}
			onChange={handleChange}
			onSave={options => console.log("Save triggered", options)}
			dark={dark_theme}
			autoFocus
			/>
		</div>
		)
}
// const mapDispatchToProps = dispatch => ({
// 	onSaveArticle: (article_id,content) =>
// 		dispatch(saveArticle(article_id,content))
// })
export default ArticleEditor