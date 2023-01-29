const prompt=require("prompt-sync")();
const musiclibrary=[
    {
        playlist : "Podcast",
        song1 : "books", 
        song2 : "astronomy", 
        song3 : "tech", 
    },
    {
        playlist : "Indi-India",
        song1 : "Tuta Pull Wahan", 
        song2 : "Chhodo Kalaiya", 
        song3 : "Rangi Saari", 
    },
    {
        playlist : "EDM",
        song1 : "The Nights", 
        song2 : "On the Floor", 
        song3 : "Hey Mama", 
    },
]
console.log(musiclibrary);
const main=()=>{
    console.log("My music library");    
    console.log("1. Add a new song");    
    console.log("2. Delete a song");    
    console.log("3. Update a song");    
    console.log("4. Add a playlist");    
    console.log("5. Delete a Playlist");    
    console.log("6. Get all playlist");    
}

main();
const choice=prompt("Enter your choice: ");
const addsong = ()=>{
    const playlist=prompt("Enter playlist name to edit: ");
    let playlistcurr=musiclibrary.filter((ele)=>ele.playlist==playlist)
    const song=prompt("Enter a new song: ");
    playlistcurr.map((ele)=>{
        let songid=Object.keys(ele).length;
        let newkey=`song${songid}`;
        ele[newkey]=`${song}`;
    })
    console.log("new song added succesfully");
    console.log(musiclibrary);
}
const deletesong=()=>{
    const playlist=prompt("Enter playlist name to edit: ");
    let playlistcurr=musiclibrary.filter((ele)=>ele.playlist==playlist)
    const songno=prompt("Enter song no to delete: ");
    playlistcurr.map((ele)=>{
        
        let songkey=`song${songno}`;
        delete ele[songkey];
    })
    console.log("song deleted succesfully");
    console.log(musiclibrary)
}
const updatesong=()=>{
    const playlist=prompt("Enter playlist name to edit: ");
    let playlistcurr=musiclibrary.filter((ele)=>ele.playlist==playlist)
    const prevsongno=prompt("Enter song no to update: ");
    const newsong=prompt("Enter new song name: ");
    playlistcurr.map((ele)=>{
        let songid=`song${prevsongno}`;
        ele[songid]=newsong;

    })
    console.log(musiclibrary)

}
const addplaylist=()=>{
    const playlist=prompt("Enter playlist name: ");
    // const song1=prompt("Enter name of song: ");
    const songqty=prompt("enter no of song to add: ")
    let songs=[]
    for(let i=1;i<=songqty;i++){
        let songname=prompt("Enter song name: ");
        songs.push(songname);

    }
    
    musiclibrary.push({playlist,songs})


    
    console.log(musiclibrary)

   
}
const deleteplaylist=()=>{
    const playlistname=prompt("Enter playlist name to delete: ");
    const elementindex=musiclibrary.findIndex((i)=>i.playlist===playlistname)
    musiclibrary.splice(elementindex,1);
    console.log(musiclibrary)


}

    

switch(choice){
    case "1":
        addsong();
        break;
                        
    case "2":
        deletesong();
        break; 
    case "3":
        updatesong();
        break;
    case "4":
        addplaylist();
        break;
    case "5":
        deleteplaylist();
        break;                
    default:
        console.log(musiclibrary);
}


    

    
                


        
        

