// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import type { CourtListenerAPI } from '../client';

export abstract class APIResource {
  protected _client: CourtListenerAPI;

  constructor(client: CourtListenerAPI) {
    this._client = client;
  }
}
