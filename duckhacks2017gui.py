from kivy.app import App
from kivy.uix.widget import Widget
from kivy.uix.label import Label
from kivy.uix.button import Button
from kivy.uix.boxlayout import BoxLayout
import subprocess as sp
from functools import partial

def launch_the_memes(args):
    sp.call(["ng serve"], shell=True)

class DuckhacksApp(App):
    def build(self):
        memer1 = Label(text="Create An Instance",
                       font_size=80)
        memer2 = Label(text="Click the button below to launch an instance",
                       font_size=33)
        boxLayout = BoxLayout(spacing=10,
                              orientation='vertical')
        btn_memes = Button(text="Launch",
                           font_size=50)
        btn_memes.bind(on_release=launch_the_memes)
        boxLayout.add_widget(memer1)
        boxLayout.add_widget(memer2)
        boxLayout.add_widget(btn_memes)
        return boxLayout

if __name__ == '__main__':
    DuckhacksApp().run()
