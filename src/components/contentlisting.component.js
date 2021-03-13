import React from 'react';

export default function ContentListing(props){
    const notes=props.notes;
    return(
        <div>
            {notes && 
            notes.map((note)=>{
                return(
                    <div class="container bg-light text-dark p-3 mb-2 border border-primary rounded mt-1">
                        <div class="font-weight-bold">
                        {(note.title).charAt(0).toUpperCase()+(note.title).slice(1)}
                        </div>
                        {note.content!="" && <div>{note.content}</div>}
                        <div style={{fontSize:10,color:'#808080',fontWeight:'bold'}}>
                            posted by: {note.userEmail}
                        </div>
                    </div>
                )
            })}

        </div>
    )
}