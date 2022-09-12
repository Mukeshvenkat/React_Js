import { Fragment } from "react";
import { Route, useParams } from "react-router-dom";
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
  const quote = DUMMY_QUOTE.find((quotes) => quotes.id === params.quoteId);

  if (!quote) {
    return <p>No Quote Available</p>;
  }
  return (
    <Fragment>
      <HighlightedQuote text={quote.text} author={quote.author} />
      <Route path={`/quotes/${params.quoteId}/comments`}>
        <Comments />
      </Route>
    </Fragment>
  );
};

export default QuoteDetail;
