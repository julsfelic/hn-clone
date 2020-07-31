import React from "react";

import { useQuery } from "../hooks/query";

export default function User() {
  const query = useQuery();

  return <h1>{query.get("id")}</h1>;
}
