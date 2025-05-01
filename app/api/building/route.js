export async function GET() {
    const vansShoes = [
      { id: 1, name: 'Old Skool', color: 'Black/White', size: [6, 7, 8, 9, 10, 11], price: 60, image: '/images/image_01.jpg' },
      { id: 2, name: 'Authentic', color: 'Navy', size: [6, 7, 8, 9, 10, 11], price: 50, image: '/images/image_02.jpg' },
      { id: 3, name: 'Sk8-Hi', color: 'Black/White', size: [6, 7, 8, 9, 10, 11], price: 70, image: '/images/image_03.jpg' },
      { id: 4, name: 'Era', color: 'Red/White', size: [6, 7, 8, 9, 10, 11], price: 55, image: '/images/image_04.jpg' },
      { id: 5, name: 'Slip-On', color: 'Checkerboard', size: [6, 7, 8, 9, 10, 11], price: 50, image: '/images/image_05.jpg' },
      { id: 6, name: 'UltraRange', color: 'Gray/White', size: [6, 7, 8, 9, 10, 11], price: 80, image: '/images/image_06.jpg' },
      { id: 7, name: 'ComfyCush', color: 'Black', size: [6, 7, 8, 9, 10, 11], price: 65, image: '/images/image_07.jpg' },
      { id: 8, name: 'Bold Ni', color: 'Yellow/White', size: [6, 7, 8, 9, 10, 11], price: 75, image: '/images/image_08.jpg' },
      { id: 9, name: 'Italic Ni', color: 'Yellow/White', size: [6, 7, 8, 9, 10, 11], price: 75, image: '/images/image_09.jpg' },
    ];

    return Response.json(vansShoes);
}
