export namespace RemoveMarket {
  export interface UseCase {
    removeMarket(id: number): Promise<void>;
  }
}
