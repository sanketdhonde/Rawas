// let url = "https://fakestoreapi.com/products";

//     async function fetchData(){
//         try{
//             let res = await fetch(url);
//             let data = await res.json();

//             console.log("Data :", data);
//         }catch(err){
//             console.log("err:",err);
//         }

//     }

//     fetchData();





function navbar(){
    return `
           

        <div id="navbar">
            <div>
                <div class="sanket">
                    <img id="logo_1" src="logotest-fDjSHvee5-transformed.svg" alt="logo">
                </div>
                <div>
                    <p>MEN</p>
                    <p>ACCESORIES</p>
                   
                </div>
                <div id="icons">
                    <div>
                        <i class="fa-solid fa-magnifying-glass"></i>
                        <input type="text" id="query" placeholder="Search" />
                    </div>
                    <div>
                        <div></div>
                        <a href="./loginmain.html"><i class="fa-regular fa-user"></i></a>
                        <i class="fa-regular fa-heart"></i>
                        <a href="./addtocart.html"><i class="fa-solid fa-bag-shopping"></i></a>
                        
                    </div>
                </div>
            </div>
        </div>
    `;

}





export default navbar;