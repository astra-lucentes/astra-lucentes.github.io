def number_m(x: float, unit: str) -> str:
    m_iter = iter(('n', 'μ', 'm', '', 'K'))
    m = next(m_iter)
    
    while x >= 1000:
        m = next(m_iter)
        x /= 1000
        
    return f'{x:.1f} {m}{unit}'


def integer(n):
    if n < 10_000: return str(n)
    
    result = []
    digits = list(str(n))
    build, next = result.append, digits.pop

    if not digits:
        build('0')
    
    i = 0
    while digits:
        build(next())
        i += 1
        if i == 3 and digits:
            i = 0
            build(' ')
    
    return ''.join(reversed(result))


def filesize(size):
    power = 0
    
    while size >= 1000:
        power += 1
        size /= 1024
    
    if 0 <= size < 10:
        size = round(size, 2)
    elif 10 <= size < 100:
        size = round(size, 1)
    else:
        size = int(round(size, 0))
        
    return f'{size} {('B' , 'KB', 'MB', 'GB', 'TB', 'PB')[power]}'
