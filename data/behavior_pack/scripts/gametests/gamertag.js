import { World } from 'mojang-minecraft';

World.events.tick.subscribe(() => {
  World.events.entityCreate.subscribe((entityData) => {
    if (entityData.entity.id === "entity:terminator") {
      let entityName = "Terminator";

      entityData.entity.nameTag = `${entityName}`;
    };
  });
});