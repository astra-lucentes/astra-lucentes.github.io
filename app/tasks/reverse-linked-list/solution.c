#include <stdlib.h>
#include <stdio.h>

typedef struct node
{
  int value;
  struct node* next;
} node;

node *reverse(node *head)
{

  node *curr = head, *prev = NULL, *next;

  while (curr != NULL)
  {
    next = curr->next;
    curr->next = prev;

    prev = curr;
    curr = next;
  }

  return prev;
}

node *create(int value)
{
  node *new = (node *)malloc(sizeof(node));
  new->value = value;
  new->next = NULL;
  return new;
}

int main()
{

  node *head = create(1);
  head->next = create(2);
  head->next->next = create(3);
  head->next->next->next = create(4);
  head->next->next->next->next = create(5);

  head = reverse(head);

  printf("%d", head->value);
  printf("%d", head->next->value);
  printf("%d", head->next->next->value);
  printf("%d", head->next->next->next->value);
  printf("%d", head->next->next->next->next->value);

  return 0;
}