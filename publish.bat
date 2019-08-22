@echo off
echo STARTING PUBLISH

cmd /c node 1up
cmd /c npm publish
git add *
git commit -m "%*"
git push

echo PUBLISH COMPLETED