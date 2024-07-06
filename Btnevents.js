export default function Btnevent(){
    return(
        <Toolbar
        onPlayMovie={()=>alert('playing Movie!')}
        onUploadImage={()=>alert('Uploading Image!')}
        />
    );
}
function Toolbar({onPlayMovie,onUploadImage}){
    return(
        <div>
            <button onClick={onPlayMovie}>
                playMovie
            </button>
            <button onClick={onUploadImage}>
                Upload Image
            </button>
        </div>
    );
}
function Button({onClick,children}){
    return(
        <button onClick={onClick}>
            {children}
        </button>
    );
}