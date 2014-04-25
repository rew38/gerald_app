require 'spec_helper'


describe 'visit root' do
  it "should have specific content" do
    visit root_path
    expect(page).to have_content("Hey Macarena!")
  end
  it "should change h1 content on click", js: true do
    visit root_path
    page.find("h1", :text => "Hey Macarena!").click
    expect(page).to have_content "!ANERACAM YEH";
  end
end
