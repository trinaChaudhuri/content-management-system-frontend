import React,{useEffect,useState} from 'react';
import axios from 'axios';
import {ROOT,WindowUrl} from '../Api';
import ContentListing from './contentlisting.component';
export default function Content(){
    const [title,setTitle]=useState("");
    const [content,setContent]=useState("");
    const [image,setImage]=useState([]);
    const [video,setvideo]=useState([]);
    const [refreshscreen,setrefreshscreen]=useState(null);
    const [getallnotes,setgetallnotes]=useState(null);
    let userid=localStorage.getItem("user_id");       

    useEffect(()=>{
        axios({
            method:'GET',
            url:`${ROOT}/notes`,
        }).then(function(res){
            setgetallnotes(res.data);
        }).catch(function(err){
        })
    },[refreshscreen])

    const handlepost=()=>{
        if(title!==""){
            axios({
                method:'POST',
                url:`${ROOT}/notes`,
                data:{
                    title:title,
                    content:content,
                    image:image,
                    video:video,
                    userId:userid
                },
            }).then(function(res){
                setTitle("");
                setContent("");
                setrefreshscreen(!refreshscreen);
            }).catch(function(err){
                setTitle("");
                setContent("");
                setrefreshscreen(!refreshscreen);
            })
        }else{
            alert("Title cannot be empty!")
        }
    }
   
   
    return(
        <>
        <button type="button" class="btn btn-primary float-right mb-3" onClick={()=>window.location=`${WindowUrl}/sign-in`}>
            Log out
        </button>
        <div>
        <input type="text" placeholder="What's on your mind?" class="form-control" id="usr" value={title}
        onChange={(event)=>setTitle(event.target.value)}/>
        <textarea placeholder="Enter some content..." class="form-control" rows="5" id="comment"
        value={content} onChange={(event)=>setContent(event.target.value)}/> 
        </div>
        <div className="button-margin">
        <button type="button" class="btn btn-outline-primary" onClick={()=>handlepost()}>post</button>
        </div>
        {getallnotes && getallnotes!==undefined && getallnotes!==null &&  <ContentListing notes={getallnotes}/>}
        </>
    )
}