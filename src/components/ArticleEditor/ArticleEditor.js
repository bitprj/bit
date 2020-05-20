import React, { useState } from 'react';
import { debounce } from "lodash";
import { connect } from 'react-redux';
import Editor from 'rich-markdown-editor';
import { openUploadWidget } from "../../services/CloudinaryService";
import {saveNewArticle,updateArticle} from "../../services/ArticleService";

const ArticleEditor = ({
	article_id,
	content
}) => {
	const [readOnly,onChangeEdit] = useState(true)
	
	var [values,setValue] = useState(content || "")

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
	    tags: [tag],
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

// Save Article method 
// May need some changes
	const Save = () => {
		console.log(values)
		if(article_id==undefined){
			const message = saveNewArticle(123,values)
			console.log(message)
		}
		else{
			const message = updateArticle(article_id,values)
			console.log(message)
		}
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
          {readOnly?null:<div><button type="button" onClick={() => beginUpload('image')}>
          	Upload Image</button>
          	<button onClick={() => Save()}>Save</button></div>
          }
        </div>
        <br />
        <br />
			<Editor
			id="new_article"
			readOnly={readOnly}
			value={values}
			defaultValue={values}
			onChange={handleChange}
			onSave={options => console.log("Save triggered", options)}
			dark={dark_theme}
			autoFocus
			/>
		</div>
		)
}
export default ArticleEditor