const fs=require('fs');
let data=fs.readFileSync('1.json');
let musiclibrary=JSON.parse(data);
    const prompt=require("prompt-sync")();
    
    console.log(musiclibrary);
    const main=()=>{
        console.log("My music library");    
        console.log("1. Add a new song");    
        console.log("2. Delete a song");    
        console.log("3. Update a song");    
        console.log("4. Add a playlist");    
        console.log("5. Delete a Playlist");    
        console.log("6. Search a Playlist");    
    }
    
    main();
    const choice=prompt("Enter your choice: ");
    const addsong = ()=>{
        const playlist=prompt("Enter playlist name to edit: ");
        let playlistcurr=musiclibrary.filter((ele)=>ele.playlist==playlist)
        const song=prompt("Enter a new song: ");
        playlistcurr.map((ele)=>ele.songs.push(song));
        console.log("new song added succesfully");
        console.log(musiclibrary);
    }
    const deletesong=()=>{
        const playlist=prompt("Enter playlist name to edit: ");
        let playlistcurr=musiclibrary.filter((ele)=>ele.playlist==playlist)
        const song=prompt("Enter song name to delete: ");
        playlistcurr.map((ele)=>{
            let songindex = ele.songs.findIndex((i)=>i==song);
            ele.songs.splice(songindex,1);
        })
        console.log("song deleted succesfully");
        console.log(musiclibrary);
    }
    const updatesong=()=>{
        const playlist=prompt("Enter playlist name to edit: ");
        let playlistcurr=musiclibrary.filter((ele)=>ele.playlist==playlist)
        const prevsong=prompt("Enter song name to update: ");
        const newsong=prompt("Enter new song name: ");
        playlistcurr.map((ele)=>{
            let songindex=ele.songs.findIndex((i)=>i==prevsong);
            ele.songs[songindex]=newsong;
        })
        console.log("Song updated successfully");
        console.log(musiclibrary);
    
    }
    const addplaylist=()=>{
        const playlist=prompt("Enter playlist name: ");
        const songs=prompt("enter song name to add: ")
        musiclibrary.push({playlist,songs})
        console.log(musiclibrary)
    }
    const deleteplaylist=()=>{
        const playlistname=prompt("Enter playlist name to delete: ");
        const elementindex=musiclibrary.findIndex((i)=>i.playlist===playlistname)
        musiclibrary.splice(elementindex,1);
        console.log(musiclibrary)
    }
    const searchplaylist=()=>{
        const playlistname=prompt("Enter playlist name to search: ");
        const playlistindex=musiclibrary.findIndex((i)=>i.playlist==playlistname)
        console.log(musiclibrary[playlistindex])
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
        case "6":
            searchplaylist();
            break;             
        default:
            console.log(musiclibrary);
    }







    
    

   
    


    

   

    



    

    
                


        
        

