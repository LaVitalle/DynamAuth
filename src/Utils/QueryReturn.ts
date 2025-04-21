class QueryReturn {
  generatedQuery: string;
  queryCompleter: string[];

  constructor(query: string, queryParameters: string[]) {
    this.generatedQuery = query;
    this.queryCompleter = queryParameters;
  }
}
export default QueryReturn;