import { Link } from "react-router-dom";

const Products = () => {
  return (
    <section>
      <h1>The Products Page</h1>
      <ul>
        <li><Link to='/products/p1'>The Fellowship Of The Ring</Link></li>
        <li><Link to='/products/p2'>Two Towers</Link></li>
        <li><Link to='/products/p3'>The Return Of The Kings</Link></li>
      </ul>
    </section>
  );
};

export default Products;
