
import basket_icon from './basket_icon.png'
import header_img from './header_img.jpg'
import logo from './logo.png'
import menu_1 from './menu_1.png'
import menu_2 from './menu_2.png'
import menu_3 from './menu_3.png'
import menu_4 from './menu_4.png'
import menu_5 from './menu_5.jpg'
import menu_6 from './menu_6.jpg'
import menu_7 from './menu_7.png'
import menu_8 from './menu_8.png'
import search_icon from './search_icon.png'

import food_1 from './food_1.png'
import food_10 from './food_10.png'
import food_11 from './food_11.png'
import food_12 from './food_12.png'
import food_13 from './food_13.png'
import food_14 from './food_14.png'
import food_15 from './food_15.png'
import food_16 from './food_16.png'
import food_17 from './food_17.png'
import food_18 from './food_18.png'
import food_19 from './food_19.png'
import food_2 from './food_2.png'
import food_20 from './food_20.png'
import food_21 from './food_21.png'
import food_22 from './food_22.png'
import food_23 from './food_23.png'
import food_24 from './food_24.png'
import food_25 from './food_25.png'
import food_26 from './food_26.png'
import food_27 from './food_27.png'
import food_28 from './food_28.png'
import food_29 from './food_29.png'
import food_3 from './food_3.png'
import food_30 from './food_30.png'
import food_31 from './food_31.png'
import food_32 from './food_32.png'
import food_4 from './food_4.png'
import food_5 from './food_5.png'
import food_6 from './food_6.png'
import food_7 from './food_7.png'
import food_8 from './food_8.png'
import food_9 from './food_9.png'

import add_icon_green from './add_icon_green.png'
import add_icon_white from './add_icon_white.png'
import app_store from './app_store.png'
import bag_icon from './bag_icon.png'
import cross_icon from './cross_icon.png'
import facebook_icon from './facebook_icon.png'
import linkedin_icon from './linkedin_icon.png'
import logout_icon from './logout_icon.png'
import parcel_icon from './parcel_icon.png'
import play_store from './play_store.png'
import profile_icon from './profile_icon.png'
import rating_starts from './rating_starts.png'
import remove_icon_red from './remove_icon_red.png'
import selector_icon from './selector_icon.png'
import twitter_icon from './twitter_icon.png'

export const assets = {
    logo,
    basket_icon,
    header_img,
    search_icon,
    rating_starts,
    add_icon_green,
    add_icon_white,
    remove_icon_red,
    app_store,
    play_store,
    linkedin_icon,
    facebook_icon,
    twitter_icon,
    cross_icon,
    selector_icon,
    profile_icon,
    logout_icon,
    bag_icon,
    parcel_icon
}

export const menu_list = [
    {
        menu_name: "Appetizers",
        menu_image: menu_1
    },
    {
        menu_name: "Salads",
        menu_image: menu_2
    },
    {
        menu_name: "Entrees",
        menu_image: menu_3
    },
    {
        menu_name: "Sandwiches",
        menu_image: menu_4
    },
    {
        menu_name: "Pizzas",
        menu_image: menu_5
    },
    {
        menu_name: "Soups",
        menu_image: menu_6
    },
    {
        menu_name: "Pasta",
        menu_image: menu_7
    },
    {
        menu_name: "Desserts",
        menu_image: menu_8
    }]

    export const food_list = [
        {
            _id: "1",
            name: "Mozzarella Sticks",
            image: food_1,
            price: 630,
            description: "Crispy on the outside, gooey on the inside, our Mozzarella Sticks are the perfect starter. Served with marinara sauce for dipping.",
            category: "Appetizers"
        },
        {
            _id: "2",
            name: "Chicken Wings",
            image: food_2,
            price: 800,
            description: "Juicy, tender chicken wings tossed in your choice of sauce. Whether you prefer tangy BBQ or spicy buffalo, these wings are sure to please.",
            category: "Appetizers"
        }, {
            _id: "3",
            name: "Bruschetta",
            image: food_3,
            price: 700,
            description: "Toasted baguette slices topped with ripe tomatoes, fresh basil, garlic, and a drizzle of balsamic glaze. A classic Italian appetizer bursting with flavor.",
            category: "Appetizers"
        }, {
            _id: "4",
            name: "Spring Rolls",
            image: food_4,
            price: 480,
            description: "Light and crispy, our Spring Rolls are filled with a colorful medley of vegetables and served with a side of sweet chili dipping sauce.",
            category: "Appetizers"
        }, {
            _id: "5",
            name: "Caesar Salad",
            image: food_5,
            price: 1650,
            description: "Crisp romaine lettuce tossed in creamy Caesar dressing, topped with crunchy croutons and shaved Parmesan cheese.",
            category: "Salads"
        }, {
            _id: "6",
            name: "Greek Salad",
            image: food_6,
            price: 2100,
            description: "A refreshing blend of crisp lettuce, ripe tomatoes, cucumbers, red onions, Kalamata olives, and feta cheese, drizzled with Greek vinaigrette.",
            category: "Salads"
        }, {
            _id: "7",
            name: "Cobb Salad",
            image: food_7,
            price: 2600,
            description: "A hearty mix of grilled chicken, crisp bacon, hard-boiled eggs, avocado, tomatoes, and blue cheese crumbles on a bed of mixed greens.",
            category: "Salads"
        }, {
            _id: "8",
            name: "Caprese Salad",
            image: food_8,
            price: 1400,
            description: "Sliced ripe tomatoes, fresh mozzarella cheese, and fragrant basil leaves drizzled with balsamic glaze and olive oil.",
            category: "Salads"
        }, {
            _id: "9",
            name: "Grilled Salmon",
            image: food_9,
            price: 4200,
            description: "Succulent grilled salmon fillet seasoned with herbs and served with your choice of side dish.",
            category: "Entrees"
        }, {
            _id: "10",
            name: "Beef Tenderloin",
            image: food_10,
            price: 4800,
            description: "Juicy and flavorful, our Beef Tenderloin is grilled to perfection and served with garlic mashed potatoes and seasonal vegetables.",
            category: "Entrees"
        }, {
            _id: "11",
            name: "Chicken Parmesan",
            image: food_11,
            price: 3100,
            description: "Crispy breaded chicken breast smothered in marinara sauce and melted mozzarella cheese, served over a bed of pasta.",
            category: "Entrees"
        }, {
            _id: "12",
            name: "Vegetable Stir-fry",
            image: food_12,
            price: 1200,
            description: "Fresh vegetables stir-fried to perfection in a savory sauce, served over steamed rice.",
            category: "Entrees"
        },
        {
            _id: "13",
            name: "Classic BLT",
            image: food_13,
            price: 630,
            description: "Crispy bacon, ripe tomatoes, and crisp lettuce stacked between slices of toasted bread and slathered with mayo.",
            category: "Sandwiches"
        },
        {
            _id: "14",
            name: "Turkey Club",
            image: food_14,
            price: 890,
            description: "Sliced turkey breast, crispy bacon, ripe tomatoes, lettuce, and mayo on toasted bread.",
            category: "Sandwiches"
        }, {
            _id: "15",
            name: "Grilled Cheese",
            image: food_15,
            price: 690,
            description: "A comforting classic made with gooey melted cheese between buttery grilled bread.",
            category: "Sandwiches"
        }, {
            _id: "16",
            name: "Philly Cheesesteak",
            image: food_16,
            price: 760,
            description: "Thinly sliced steak, sautéed onions, peppers, and melted provolone cheese on a toasted hoagie roll.",
            category: "Sandwiches"
        }, {
            _id: "17",
            name: "Margherita Pizza",
            image: food_17,
            price: 2300,
            description: "Classic pizza topped with fresh mozzarella cheese, ripe tomatoes, basil, and a drizzle of olive oil.",
            category: "Pizzas"
        }, {
            _id: "18",
            name: "Pepperoni Pizza",
            image: food_18,
            price: 2600,
            description: "A timeless favorite featuring savory pepperoni slices, gooey melted cheese, and tangy tomato sauce on a crispy crust.",
            category: "Pizzas"
        }, {
            _id: "19",
            name: "Veggie Supreme Pizza",
            image: food_19,
            price: 2100,
            description: "Loaded with a variety of fresh vegetables including bell peppers, onions, mushrooms, olives, and tomatoes.",
            category: "Pizzas"
        }, {
            _id: "20",
            name: "BBQ Chicken Pizza",
            image: food_20,
            price: 2300,
            description: "Tangy BBQ sauce, tender grilled chicken, red onions, and cilantro atop a cheesy pizza crust.",
            category: "Pizzas"
        }, {
            _id: "21",
            name: "Tomato Basil Soup",
            image: food_21,
            price: 490,
            description: "Creamy tomato soup infused with aromatic basil leaves, perfect for dipping grilled cheese sandwiches.",
            category: "Soups"
        }, {
            _id: "22",
            name: "Chicken Noodle Soup",
            image: food_22,
            price: 530,
            description: "Comfort in a bowl, with tender chicken, hearty vegetables, and noodles simmered in a rich broth.",
            category: "Soups"
        }, {
            _id: "23",
            name: "Minestrone Soup",
            image: food_23,
            price: 780,
            description: "A hearty Italian soup loaded with vegetables, beans, pasta, and savory herbs.",
            category: "Soups"
        }, {
            _id: "24",
            name: "Clam Chowder",
            image: food_24,
            price: 890,
            description: "Creamy and indulgent, our Clam Chowder is packed with tender clams, potatoes, and aromatic herbs.",
            category: "Soups"
        }, {
            _id: "25",
            name: "Spaghetti Carbonara",
            image: food_25,
            price: 1950,
            description: "A classic Roman pasta dish featuring spaghetti tossed with crispy pancetta, eggs, Parmesan cheese, and black pepper.",
            category: "Pasta"
        }, {
            _id: "26",
            name: "Fettuccine Alfredo",
            image: food_26,
            price: 2100,
            description: "Rich and creamy Alfredo sauce tossed with fettuccine pasta and garnished with freshly grated Parmesan cheese.",
            category: "Pasta"
        }, {
            _id: "27",
            name: "Penne Arrabbiata",
            image: food_27,
            price: 1660,
            description: "Spicy tomato sauce infused with garlic and red pepper flakes, served over al dente penne pasta.",
            category: "Pasta"
        }, {
            _id: "28",
            name: "Linguine with Clam Sauce",
            image: food_28,
            price: 2400,
            description: "Tender linguine pasta tossed in a flavorful white wine and garlic sauce with tender clams.",
            category: "Pasta"
        }, {
            _id: "29",
            name: "New York Cheesecake",
            image: food_29,
            price: 530,
            description: "Creamy and decadent cheesecake on a graham cracker crust, topped with a sweet strawberry compote.",
            category: "Desserts"
        }, {
            _id: "30",
            name: "Chocolate Lava Cake",
            image: food_30,
            price: 620,
            description: "Indulge your sweet tooth with our molten chocolate lava cake, served warm with a scoop of vanilla ice cream.",
            category: "Desserts"
        }, {
            _id: "31",
            name: "Tiramisu",
            image: food_31,
            price: 670,
            description: "Layers of espresso-soaked ladyfingers and creamy mascarpone cheese, dusted with cocoa powder for a rich and indulgent dessert.",
            category: "Desserts"
        }, {
            _id: "32",
            name: "Fruit Tart",
            image: food_32,
            price: 490,
            description: "A buttery tart shell filled with luscious pastry cream and topped with an assortment of fresh seasonal fruits for a light and refreshing treat.",
            category: "Desserts"
        }
    ]