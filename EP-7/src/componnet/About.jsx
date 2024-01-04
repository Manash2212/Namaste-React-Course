import React, { useEffect } from "react";

const About = () => {
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=22.5867597&lng=88.4149401&restaurantId=10365&catalog_qa=undefined&submitAction=ENTER"
    );
    const json = await data.json();
    console.log(json);
  };

  return (
    <div>
      <h1>This is Namaste React Course Episode - 7</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit quis nihil
        aliquam, cum, explicabo necessitatibus ab quaerat consequatur non sunt
        laborum vel sint numquam esse dolores in quas ipsa commodi consectetur
        facere illo velit ratione minima excepturi! Nesciunt consequatur,
        cupiditate odio, nulla neque qui ratione esse magni, voluptas fugiat
        eius aperiam vel laboriosam ipsa itaque vitae quasi atque illum in
        laudantium. Obcaecati architecto, sequi dolorum accusamus impedit autem?
        In odit ab ullam delectus harum, iusto vel. Minus error consectetur,
        fuga aperiam, voluptas commodi nesciunt quidem necessitatibus vel quam
        natus quas totam esse alias ullam! Natus fugit officia ipsa pariatur
        cupiditate!
      </p>
    </div>
  );
};

export default About;
