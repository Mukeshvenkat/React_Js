import QuoteList from "../components/quotes/QuoteList";

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
const AllQuotes = () => {
  return <QuoteList quotes={DUMMY_QUOTE} />;
};

export default AllQuotes;
