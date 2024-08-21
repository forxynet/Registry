import type { DetailsLoaderResult } from "./detailsLoader";
import { useLoaderData, Link } from "react-router-dom";

export default function DetailsPage() {
  const { details } = useLoaderData() as DetailsLoaderResult;

  return <div className="space-y-4">

    <Link to='/' className='btn btn-light mb-4'>
      Go Back
    </Link>

    <h1 className="text-3xl font-bold my-4">
      {details?.name}
    </h1>

    <div>
      <h3 className="text-lg font-bold">
        Description
      </h3>
      <div className="p-3 bg-gray-200 rounded">
        {details?.description}
      </div>
    </div>
    <div>
      <h3 className="text-lg font-bold">
        Keyword
      </h3>
      <div className="p-3 bg-gray-200 rounded">
        {
          details?.keywords?.map((name) =>
            <li key={name}>{name}</li>
          )
        }
      </div>
    </div>
    <div>
      <h3 className="text-lg font-bold">
        License
      </h3>
      <div className="p-3 bg-gray-200 rounded">
        {details?.license}
      </div>
    </div>

    <div>
      <h3 className="text-lg font-bold">
        Home Page
      </h3>
      <div className="p-3 bg-gray-200 rounded">
        <Link to={`${details?.homepage}`} target="_blank">{details?.homepage}</Link>
      </div>
    </div>
  </div>
}
