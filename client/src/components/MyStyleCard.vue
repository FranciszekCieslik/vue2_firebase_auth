<template>
  <div>
    <b-card
      @click="saveCheckedCheckboxes"
      bg-variant="light"
      v-for="box in checkboxes"
      :key="box.name"
    >
      <CheckBoxPic :name="box.name" :img="box.img" />
    </b-card>
  </div>
</template>

<script>
import CheckBoxPic from "./items/CheckBoxPic.vue";
import { getUserStyles, updateUserStyles } from "@/firestore";

export default {
  components: {
    CheckBoxPic,
  },

  data() {
    return {
      checkedCheckboxes: [],
      checkboxes: [
        {
          name: "Casual",
          img: "https://perkclothing.com/cdn/shop/articles/ls_outside_1016.jpg?v=1655826119&width=1500",
        },
        {
          name: "Goth fashion",
          img: "https://eu.killstar.com/cdn/shop/files/SELL_AN_ITEM_4e6f971e-43bf-4ab4-b02f-77ef28fa3294_300x.jpg?v=1689681418",
        },

        {
          name: "Formal clothing",
          img: "https://www.gazman.com.au/cdn/shop/articles/feature_1_1.png?v=1695701831https://5.imimg.com/data5/ANDROID/Default/2021/12/HG/LV/ZH/79653266/prod-20211214-1356347974680634372362932-jpg.jpg",
        },
        {
          name: "Bohemian style",
          img: "https://i.pinimg.com/564x/96/9b/88/969b88028cd6a261450c528e6c63006b.jpg",
        },
        {
          name: "Classic style",
          img: "https://images.squarespace-cdn.com/content/v1/63f6daebd6676f7b4398743a/39f8d861-3ac4-4deb-959d-6fdf5eea2878/Classic+french+style.png",
        },
        {
          name: "Artsy",
          img: "https://i.pinimg.com/736x/d7/13/d1/d713d128e883e821403e1e53cfc23982.jpg",
        },
        {
          name: "Black tie style",
          img: "https://www.brides.com/thmb/HYLDYJnRCOtJXPCO-JmKbyGoxOM=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/blacktieattire01-6619e988ec0c4854beaf3178bc5e2f3e.jpg",
        },
        {
          name: "Fashionista",
          img: "https://i.pinimg.com/736x/64/50/48/6450489567fe0646dbf200826f2e61f0.jpg",
        },
        {
          name: "Athleisure style",
          img: "https://hips.hearstapps.com/hmg-prod/images/addison-rae-is-seen-on-october-26-2022-in-los-angeles-news-photo-1675361769.jpg",
        },
      ],
    };
  },

  async beforeCreate() {
    var storedCheckboxes = await getUserStyles();
    if (storedCheckboxes) {
      this.checkedCheckboxes = storedCheckboxes;
    } else {
      this.checkedCheckboxes = [];
    }
    this.checkStoredCheckboxes();
  },

  methods: {
    checkStoredCheckboxes() {
      this.checkedCheckboxes.forEach((checkboxId) => {
        var checkbox = document.getElementById(checkboxId);
        if (checkbox) {
          checkbox.checked = true;
        }
      });
    },

    async saveCheckedCheckboxes() {
      this.checkedCheckboxes = []; // Reset to ensure no duplicates
      var checkboxes = document.querySelectorAll(
        'input[type="checkbox"]:checked'
      );

      checkboxes.forEach((checkbox) => {
        this.checkedCheckboxes.push(checkbox.id);
      });

      await updateUserStyles(this.checkedCheckboxes);
    },
  },
};
</script>
