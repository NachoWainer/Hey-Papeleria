import './HotProducts.scss'
import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { collection, getDocs, limit, orderBy, query } from 'firebase/firestore';
import { Carousel } from 'react-bootstrap';
import { db } from '../../../firebase/config';
import { OnSale } from '../../OnSale/OnSale';
import { ItemPrice } from '../../ItemPrice/ItemPrice';

export const HotProducts = () => {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);

  const { category } = useParams();

  useEffect(() => {
    setLoading(true);
    const productosRef = collection(db, 'productos');
    const q = query(productosRef, orderBy('compras', 'desc'), limit(10));
    getDocs(q)
      .then((res) => {
        const docs = res.docs.map((doc) => {
          return { ...doc.data(), id: doc.id };
        });

        setProductos(docs);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [category]);

  const carouselItems = productos.map((item, index) => (
    <Carousel.Item key={item.id}>
      <div className="d-block w-100 CarouselImage" src={item.img} alt={item.name}>
      <Carousel.Caption>
        <div className='carouselContainer'>
          <div>
          <OnSale item={item} />
          <h4 className='carouselItemTitle'>{item.name}</h4>
            <img className='carouselitemImage' src={item.img} alt={item.name} />
            <div className='CarouselItemPriceInfo'>
              <p className='CarouselShortDesc'>{item.shortDesc}</p>
                <ItemPrice item={item}/>
              <Link to={`/detail/${item.id}`} className="btn btn-primary">
                Ver más
              </Link>
            </div>
          </div>
        </div>
      </Carousel.Caption>
      </div>
    </Carousel.Item>
  ));

  return (
    <div >
      {loading ? (
        <h2>Loading...</h2>
      ) : (
        <div className='carouselContainerBigBox'>
        <h2 className='productosMasVendidos'>Nuestros productos más vendidos:</h2>
        <div className='carouselContainerBox'>
        <Carousel>{carouselItems}</Carousel>
      
      </div>
    </div>)}
    </div>
  );
};