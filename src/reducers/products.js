// state của product 
let initialState = [
    {
        id: 1,
        name: 'iphone 7 plus',
        image: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone11-select-2019-family?wid=882&hei=1058&fmt=jpeg&qlt=80&op_usm=0.5,0.5&.v=1567022175704',
        description: 'Sản phẩm do apple sản suất',
        price: 500,
        inventory: 10,
        rating: 4
    },
    {
        id: 2,
        name: 'samsung A7 ',
        image: 'https://cdn.tgdd.vn/Products/Images/42/214909/samsung-galaxy-note-10-lite-thumb-600x600.jpg',
        description: 'Sản phẩm do samsung sản suất',
        price: 700,
        inventory: 16,
        rating: 3
    },
    {
        id: 3,
        name: 'Blackberry',
        image: 'https://cdn.tgdd.vn/Products/Images/42/112433/blackberry-keyone-9-600x600.jpg',
        description: 'Sản phẩm do bphone sản suất',
        price: 600,
        inventory: 15,
        rating: 2
    }
];

const products = (state = initialState, action) => {
    // các trường hợp cho các action
    switch (action.type) {
        default: return [...state];
    }
}
export default products;

