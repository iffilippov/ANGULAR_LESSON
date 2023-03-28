export interface IProduct {
  customfield1: string,
  customfield2: {
      date: string,
      timezone_type: number,
      timezone: string,
  },
  customfield3: string,
  customfield4: string,
  customfield5: string,
  customfield6: string,
  customfield7: number,
  // id: number,
  //   name: string,
  //   description: string,
  //   ean: string,
  //   upc: string,
  //   image: string,
  //   images: [
  //     {
  //       title: string,
  //       description: string,
  //       url: string
  //     },
  //     {
  //       title: string,
  //       description: string,
  //       url: string
  //     },
  //     {
  //       title: string,
  //       description: string,
  //       url: string
  //     }
  //   ],
  //   net_price: number,
  //   taxes: string,
  //   price: string,
  //   categories: [
  //     string,
  //     string,
  //     string,
  //     string,
  //     string,
  //     string,
  //     string,
  //     string,
  //     string
  //   ],
  //   tags: [
  //     string,
  //     string,
  //     string,
  //     string,
  //     string,
  //     string,
  //     string
  //   ]
}