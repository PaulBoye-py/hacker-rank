/*
 * Complete the 'sockMerchant' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER n
 *  2. INTEGER_ARRAY ar
 */

function sockMerchant(n, ar) {
    let socks = {}
    let pairs = 0
        
    for (let element of ar) {
        socks[element] = socks[element] + 1 || 1
        if (socks[element] % 2 === 0) {
            pairs += 1;
        }
    }
    return pairs;
}