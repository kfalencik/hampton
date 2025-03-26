<template>
    <section id="contact" style="overflow: hidden">
        <div class="max-w-8xl mx-auto">
            <div class="divider-block">
            <h2 class="mb-0 text-white">Contact us!</h2>
            <p class="text-white mx-auto mt-2 mb-16">Great projects start with great people. Our team is built on trust, skill, and a shared commitment to doing things the right way—bringing vision and expertise to every job.</p>
        </div>
        <v-form method="post" name="contact" v-model="valid" netlify>
            <input type="hidden" name="form-name" value="contact" />
            <input type="hidden" name="subject" data-remove-prefix value="Inquiry from Hampton Construction group" />
            <v-text-field class="mb-3" type="text" name="name" id="name" placeholder="Name" variant="solo-filled" required :rules="[rules.rules.required]" />
            <v-text-field class="mb-3" type="email" name="email" id="email" placeholder="Your Email Address" hint="This is so we can reply to your message" variant="solo-filled" required :rules="[rules.rules.required, rules.rules.email]" />
            <v-textarea :resize="false" name="comment" id="comment" placeholder="Your Message To Us..." variant="solo-filled" required :rules="[rules.rules.required]" />
            <div class="text-right">
                <v-btn type="submit" :disabled="!valid" :color="valid ? 'accent' : null" size="large" variant="elevated">Send to us!</v-btn>
            </div>
        </v-form>
        </div>
    </section>
</template>

<script setup>
    import { rules } from '~/helpers/rules';

    import { ref } from 'vue';

    const valid = ref(false)
</script>