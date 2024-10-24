#include <stdlib.h>
#include <stdio.h>

typedef int T;

typedef struct dynamic_array
{
    T *head;
    int size;
    int capacity;
} dynamic_array;

dynamic_array constructor(int capacity)
{
    dynamic_array array;
    array.size = 0;
    array.capacity = capacity;
    array.head = calloc(capacity, sizeof(T));

    return array;
}

void destructor(dynamic_array *array)
{
    free(array->head);
}

void resize(dynamic_array *array, int capacity)
{
    array->head = realloc(array->head, sizeof(T));
    array->capacity = capacity;
}

void append(dynamic_array *array, T value)
{
    if (array->size == array->capacity)
        resize(array, array->capacity * 2);

    *(array->head + array->size) = value;
    array->size++;
}

void delete(dynamic_array *array)
{
    if (array->size == 0)
        return;
    if (array->size * 4 < array->capacity)
        resize(array, array->capacity / 2);

    array->size--;
}

int get(dynamic_array array, int index)
{
    return *(array.head + index);
}

void set(dynamic_array *array, int index, T value)
{
    *(array->head + index) = value;
}

void debug(dynamic_array array)
{
    for (int i = 0; i < array.size; i++)
        printf("%d ", get(array, i));
    printf("\n");
    printf("size = %d, capacity = %d\n\n", array.size, array.capacity);
}

int main()
{
    dynamic_array array = constructor(4);
    debug(array);

    append(&array, 10);
    debug(array);

    append(&array, 20);
    debug(array);

    append(&array, 30);
    debug(array);

    append(&array, 40);
    debug(array);

    append(&array, 50);
    debug(array);

    delete (&array);
    debug(array);

    for (int i = 60; i <= 350; i += 10)
    {
        append(&array, i);
        debug(array);
    }

    set(&array, 1, 1);
    debug(array);

    for (int i = 1; i <= 40; i++)
    {
        delete (&array);
        debug(array);
    }

    return 0;
}