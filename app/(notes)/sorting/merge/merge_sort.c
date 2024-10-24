#include <stdio.h>

typedef int T;

void merge(T array[], int left, int mid, int right)
{
    int len_a = mid - left + 1;
    int len_b = right - mid;

    T a[len_a], b[len_b];

    for (int i = 0; i < len_a; i++)
        a[i] = array[left + i];
    for (int i = 0; i < len_b; i++)
        b[i] = array[mid + 1 + i];

    int i = 0, j = 0;
    int k = left;

    while (i < len_a && j < len_b)
    {
        if (a[i] <= b[j])
        {
            array[k] = a[i];
            i++;
        }
        else
        {
            array[k] = b[j];
            j++;
        }
        k++;
    }

    while (i < len_a)
    {
        array[k] = a[i];
        i++;
        k++;
    }

    while (j < len_b)
    {
        array[k] = b[j];
        j++;
        k++;
    }
}

void merge_sort(T array[], int left, int right)
{
    if (left < right)
    {
        int mid = left + (right - left) / 2;

        merge_sort(array, left, mid);
        merge_sort(array, mid + 1, right);

        merge(array, left, mid, right);
    }
}

int main()
{
    T a[10] = {10, 9, 8, 7, 6, 5, 4, 3, 2, 1};

    merge_sort(a, 0, 9);

    for (int i = 0; i < 10; i++) printf("%d", a[i]);
}