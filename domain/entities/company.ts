import {ShopType} from '../../hooks/source-type'

export class Company {
  constructor(
    readonly id: string,
    readonly name: string,
    readonly billingHandleRate: number,
    readonly receiptHandleRate: number,
  ) {
  }

  static fromSourceRow(shopType: ShopType, row: string[]) {
    const [
      id,
      name,
      billingHandleRate,
      receiptHandleRate,
    ] = row

    return new Company(
      id,
      name,
      parseFloat(billingHandleRate),
      parseFloat(receiptHandleRate),
    )
  }
}