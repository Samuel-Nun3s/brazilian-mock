export function weightedRandom(items) {
  if (!items || items.length === 0) {
    throw new Error('Array de itens nao pode estar vazio');
  }

  if (items.length === 1) {
    return items[0];
  }

  const totalWeight = items.reduce((sum, item) => {
    return sum + (item.weight || 0);
  }, 0);

  if (totalWeight === 0) {
    const randomIndex = Math.floor(Math.random() * items.length);
    return items[randomIndex];
  }

  const random = Math.random() * totalWeight;

  let accumulator = 0;

  for (const item of items) {
    accumulator += item.weight || 0;

    if (random <= accumulator) {
      return item;
    }
  }

  return items[items.length - 1];
}

export function weightedRandomName(items) {
  const selected = weightedRandom(items);
  return selected.name;
}

export function weightedRandomMultiple(items, count, allowDuplicates = false) {
  if (count <= 0) {
    return [];
  }

  if (count > items.length && !allowDuplicates) {
    throw new Error('Nao ha itens suficientes para sortear sem repeticao');
  }

  const results = [];
  const availableItems = [...items];

  for (let i = 0; i < count; i++) {
    if (availableItems.length === 0) {
      break;
    }

    const selected = weightedRandom(availableItems);
    results.push(selected);

    if(!allowDuplicates) {
      const index = availableItems.indexOf(selected);
      availableItems.splice(index, 1);
    }
  }

  return results;
}