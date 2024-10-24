def merge(a: list, b: list) -> list:
    result = []

    while a and b:
        if a[0] <= b[0]:
            result.append(a.pop(0))
        else:
            result.append(b.pop(0))

    result.extend(a)
    result.extend(b)

    return result


def merge_sort(a: list) -> list:
    if len(a) <= 1:
        return a

    return merge(
        merge_sort(a[:len(a)//2]),
        merge_sort(a[len(a)//2:])
    )