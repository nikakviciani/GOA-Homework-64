class Account:
    _balance = 0

    __account_count = 0

    def __init__(self, initial_balance):
        self._balance = initial_balance
        Account.__account_count += 1

    def _get_balance(self):
        return self._balance

    def __set_balance(self, amount):
        self._balance = amount

    @classmethod
    def get_account_count(cls):
        return cls.__account_count
