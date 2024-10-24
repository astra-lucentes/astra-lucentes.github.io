

class testgroup:
    def __init__(self, name):
        self.name = name

    def __enter__(self):
        pass

    def __exit__(self, exc_type, exc_value, exc_traceback):
        if exc_type == AssertionError:
            print(exc_value)

        return True