
const fetchData = async () => {
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "cca95dea8cmshfa32a3f113b4978p1ab2d0jsnb5afc0bdce43",
        "X-RapidAPI-Host": "concerts-artists-events-tracker.p.rapidapi.com",
      },
    };
    const response =
        await fetch(
      "https://concerts-artists-events-tracker.p.rapidapi.com/location?name=New%20York&minDate=2022-12-31&maxDate=2022-05-31&page=1",
      options
        )
    const json = await response.json()

    console.log(json)
    //   .then((response) => response.json())
    //   .then((response) => console.log(response))
    //   .catch((err) => console.error(err));
}

fetchData()

