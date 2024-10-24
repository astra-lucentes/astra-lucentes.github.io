#include <stdio.h>
#include <stdlib.h>



void merge(int a[], int l, int m, int r) {
    int it1 = m - l + 1, it2 = r - m;

    int *L = (int *)malloc(it1 * sizeof(int));
    int *R = (int *)malloc(it2 * sizeof(int));

    for (int i = 0; i < it1; i++) {
        L[i] = a[l + i];
    }

    for (int j = 0; j < it2; j++) {
        R[j] = a[m + 1 + j];
    }
    int i = 0, j = 0, k = l;

    while (i < it1 && j < it2) {
        if (L[i] <= R[j]) {
            a[k] = L[i];
            i++;
        } else {
            a[k] = R[j];
            j++;
        }
        k++;
    }

    while (i < it1) {
        a[k] = L[i];
        i++;
        k++;
    }

    while (j < it2) {
        a[k] = R[j];
        j++;
        k++;
    }

    free(L);
    free(R);
}

void sort(int a[], int l, int r) {
    if (l < r) {
        int m = (l + r) / 2;

        sort(a, l, m);
        sort(a, m + 1, r);
        merge(a, l, m, r);
    }
}

int main() {
  int a[] = {9, 8, 7, 6, 5, 4, 3, 2, 1};
  sort(a, 0, 8);
  
  for (int i = 0; i < 9; i++) {
    printf("%d", a[i]);
  }
}