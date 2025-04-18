import { fetchData } from "@/lib/fetch";
import { GET } from "@/util/method";

const Page = async () => {
  const data = await fetchData("/crypto/all", GET);
  const req = {
    name: "Dogecoin",
    price: 0.16,
    volume: 728312312,
    symbol: "DOGE",
  };
  const test = JSON.stringify(req);
  console.log(test);
  // const post = await fetchData("/crypto/create", POST, req);
  return (
    <div>
      <div>{data}</div>
      <div></div>
      <div>test123</div>
    </div>
  );
};

export default Page;
