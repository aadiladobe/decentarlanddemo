import { DOMAINS, ENDPOINTS } from "./constants"
const params = 'searchCriteria[filterGroups][0][filters][0][field]=code&searchCriteria[filterGroups][0][filters][0][value]=HOMELOAN&searchCriteria[filterGroups][0][filters][0][conditionType]=eq&searchCriteria[sortOrders][0][field]=coupon_id&searchCriteria[sortOrders][0][direction]=ASC&searchCriteria[pageSize]=1&searchCriteria[currentPage]=1';

export default {
    getCoupon: function(){
        // executeTask(async()=>{
        //   const options = {
        //     method: "GET",
        //     headers: {
        //       "Content-Type": "application/json",
        //       "Access-Control-Allow-Origin": "*",
        //       "Authorization": "Bearer uc21il9aqm3xpw6m0z2dgqvv3c92aa7y"
        //     }
        //   };

        //   try {
        //       let response = await fetch(`${DOMAINS.commerce}${ENDPOINTS.coupon}?${params}`, options)
        //       let json = await response.json()
        //       log(json)
        //       return json;
             
        //   } catch {
        //       log("failed to reach URL")
        //   }
        // });

        const response =  {
          "items": [
              {
                  "coupon_id": "28",
                  "rule_id": "28",
                  "code": "HOMELOAN",
                  "usage_limit": null,
                  "usage_per_customer": null,
                  "times_used": "0",
                  "expiration_date": null,
                  "is_primary": "1",
                  "created_at": null,
                  "type": "0",
                  "generated_by_dotmailer": null,
                  "success_url": "https://mcprod.adobemagentocommerce.com/thank-you-coupon?code=HOMELOAN",
                  "extension_attribute_ddg_extension_attributes_email": null,
                  "extension_attribute_ddg_extension_attributes_expires_at": null
              }
          ],
          "search_criteria": {
              "filter_groups": [
                  {
                      "filters": [
                          {
                              "field": "code",
                              "value": "HOMELOAN",
                              "condition_type": "eq"
                          }
                      ]
                  }
              ],
              "sort_orders": [
                  {
                      "field": "coupon_id",
                      "direction": "ASC"
                  }
              ],
              "page_size": 1,
              "current_page": 1
          },
          "total_count": 1
      };
      return response.items[0].code;
    }
}
