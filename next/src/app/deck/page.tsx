"use client";

import { useAuth } from "@d7lab/bx-components-react";
import { APIClient } from "@d7lab/bx-components-api-client";
import { DeckWidgetCC } from "@d7lab/bx-components-react";

export default function Deck() {
  const { manager } = useAuth();
  const baseUrl = "https://stg-api.nr.nhk.jp/r8.0";
  const deckApiClient = new APIClient(baseUrl, manager);

  return (
    <DeckWidgetCC
      apiClient={deckApiClient}
      cardType="summary"
      deckId="series-tep-news-0000000012"
      deckType="episode"
      layout="scrollableList"
    />
  );
}
