/*Album: Write a function called make_album() that builds a Object describing a music album. 
The function should take in an artist name and an album title, 
and it should return a Object containing these two pieces of information. 
Use the function to make three dictionaries representing different albums. 
Print each return value to show that Objects are storing the album information correctly. 
Add an optional parameter to make_album() that allows you to store the number of tracks on an album. 
If the calling line includes a value for the number of tracks, add that value to the album’s Object. 
Make at least one new function call that includes the number of tracks on an album.*/
  
interface Album {
    artist: string;
    title: string;
    tracks?: number;
  }
  
  function make_album(artist: string, title: string, tracks?: number): Album {
    const album: Album = {
      artist,
      title,
    };
    if (tracks) {
      album.tracks = tracks;
    }
    return album;
  }
  
  const album1 = make_album("Pink Floyd", "Dark Side of the Moon");
  const album2 = make_album("Led Zeppelin", "IV", 8);
  const album3 = make_album("The Beatles", "Abbey Road", 17);
  
  console.log(album1);
  console.log(album2);
  console.log(album3);
  
  /*The make_album function accepts two required parameters, artist and title, and an optional parameter tracks. It creates a new object with artist and title properties and adds the tracks property only if it is passed as an argument.

Then, we call the make_album function three times with different combinations of artist, title, and tracks arguments, and store the returned album object in variables album1, album2, and album3.

Finally, we log each album object to the console using console.log().*/
