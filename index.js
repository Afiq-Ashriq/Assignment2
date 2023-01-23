const spotifyApi = new SpotifyWebApi();

const headers = {
  Authorization: `Bearer ${"cf96a3e1604a42669a2b51dce1e161a5"}`
};

spotifyApi.searchTracks('Narkoman', {headers}).then(
  function(data) {
    const tracks = data.tracks.items;
    console.log(tracks);
  },
  function(err) {
    console.error(err);
  }
);





