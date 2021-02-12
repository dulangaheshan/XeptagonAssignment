/**
 * @author [D5haN]
 * @email [dulangah2@gmail.com]
 * @create date 2021-02-12 01:32:40
 * @modify date 2021-02-12 13:58:58
 * @desc [random password generator]
 */
/**
 * Generate Random Password
 * @param identity identity
 * @param role User Role
 */
export const GenrateRandomPassword = (identity) => {

   return (identity + Math.random().toString(36).slice(-8)).toString().replace(/ /g,'');
    
  };