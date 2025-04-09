function solution(n, k) {
    const SKEWER_AMOUNT = 12_000;
    const DRINK_AMOUNT = 2_000;
    
    let answer = 0;
    
    answer = SKEWER_AMOUNT * n + DRINK_AMOUNT * (k - Math.floor(n/10));
    
    return answer;
}
