import React, { useState } from 'react';
import { debounce } from "lodash";
import Editor from 'rich-markdown-editor';
import { openUploadWidget } from "../../services/CloudinaryService";
import {saveNewArticle,updateArticle} from "../../services/ArticleService";

const ArticleEditor = ({
	article_id,
	content
}) => {
	const [readOnly,onChangeEdit] = useState(true)

	var [values,setValue] = useState(content || "")

	var [value_dummy,setDummyValue] = useState(content || "")

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
			setValue(value_dummy)
			onChangeEdit(true)
		}
	}

	const handleChange = debounce(value => {
	    setDummyValue(value());
	  }, 250);

	const beginUpload = tag => {
	  const uploadOptions = {
	    cloudName: "rajshah",
	    tags: [tag],
	    uploadPreset: "upload"
	  };

	  openUploadWidget(uploadOptions, (error, photos) => {
	    if (!error) {
	      if(photos.event === 'success'){
	      	value_dummy+="![]("+photos.info.url+")"
	      	setValue(value_dummy)
	        setImages([...images, photos.info.public_id])
		    }
	    } else {
	      console.log(error);
	    }
	  })
	}

	const Save = () => {
		setValue(value_dummy)
		if(article_id===undefined){
			const message = saveNewArticle(values,images)
			console.log(message)
		}
		else{
			const message = updateArticle(article_id,values,images)
			console.log(message)
		}
	}

	return(
		<div style={{background:"white",width:'60%',marginLeft:'auto',marginRight:'auto'}}>
		<div style={{display:"flex"}}>
          <br />
          <button type="button" onClick={Change_ReadOnly}>
          	{edit}
          </button>
          <button type="button" onClick={ChangeTheme}>
          	Change Theme
          </button>
          {readOnly?<div style={{display:"flex"}}><button type="button" disabled>Upload Image</button>
          	<button disabled>Save</button></div>:<div style={{display:"flex"}}><button type="button" onClick={() => beginUpload('image')}>
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
			defaultValue={content}
			onChange={handleChange}
			dark={dark_theme}
			autoFocus
		/>
		</div>
		)
}
export default ArticleEditor