export interface JsonError extends SyntaxError {
  status?: number;
  body?: string;
}
