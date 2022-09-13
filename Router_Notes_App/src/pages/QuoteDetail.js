import { Fragment } from "react";
import { Link, Route, useParams, useRouteMatch } from "react-router-dom";
import Comments from "../components/comments/Comments";
import HighlightedQuote from "../components/quotes/HighlightedQuote";

const DUMMY_QUOTE = [
  {
    id: "q1",
    author: "Mukesh",
    text: "Mukesh is learning React!",
  },
  {
    id: "q2",
    author: "Mukesh Mind",
    text: "Mukesh is trying everything to avoid learning React!",
  },
];

const QuoteDetail = () => {
  const params = useParams();
  const match = useRouteMatch();
  const quote = DUMMY_QUOTE.find((quotes) => quotes.id === params.quoteId);

  if (!quote) {
    return <p>No Quote Available</p>;
  }
  return (
    <Fragment>
      <HighlightedQuote text={quote.text} author={quote.author} />
      <Route path={match.path} exact>
        <div className="centered">
          <Link className="btn--flat" to={`${match.url}/comments`}>
            Load Comments
          </Link>
        </div>
      </Route>
      <Route path={`${match.path}/comments`}>
        <Comments />
      </Route>
    </Fragment>
  );
};

export default QuoteDetail;
