for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
        if (nums[i] + nums[j] === m) answer++;
    }
  }